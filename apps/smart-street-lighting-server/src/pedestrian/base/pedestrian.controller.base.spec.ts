import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { PedestrianController } from "../pedestrian.controller";
import { PedestrianService } from "../pedestrian.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  count: 42,
  createdAt: new Date(),
  detectedAt: new Date(),
  id: "exampleId",
  location: "exampleLocation",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  count: 42,
  createdAt: new Date(),
  detectedAt: new Date(),
  id: "exampleId",
  location: "exampleLocation",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    count: 42,
    createdAt: new Date(),
    detectedAt: new Date(),
    id: "exampleId",
    location: "exampleLocation",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  count: 42,
  createdAt: new Date(),
  detectedAt: new Date(),
  id: "exampleId",
  location: "exampleLocation",
  updatedAt: new Date(),
};

const service = {
  createPedestrian() {
    return CREATE_RESULT;
  },
  pedestrians: () => FIND_MANY_RESULT,
  pedestrian: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Pedestrian", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: PedestrianService,
          useValue: service,
        },
      ],
      controllers: [PedestrianController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /pedestrians", async () => {
    await request(app.getHttpServer())
      .post("/pedestrians")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        detectedAt: CREATE_RESULT.detectedAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /pedestrians", async () => {
    await request(app.getHttpServer())
      .get("/pedestrians")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          detectedAt: FIND_MANY_RESULT[0].detectedAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /pedestrians/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/pedestrians"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /pedestrians/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/pedestrians"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        detectedAt: FIND_ONE_RESULT.detectedAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /pedestrians existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/pedestrians")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        detectedAt: CREATE_RESULT.detectedAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/pedestrians")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
