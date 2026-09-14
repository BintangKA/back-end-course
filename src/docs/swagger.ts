import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    version: "v0.0.1",
    title: "Dokumentasi API ACARA",
    description: "Dokumentasi API ACARA",
  },

  servers: [
    {
      url: "http://localhost:3000/api",
      description: "Local Server",
    },
    {
      url: "https://back-end-course-lac.vercel.app/api",
      description: "Deploy",
    },
  ],

  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
      },
    },

    schemas: {
      LoginRequest: {
        type: "object",
        properties: {
          identifier: {
            type: "string",
            example: "Bintang",
          },
          password: {
            type: "string",
            example: "Bintang!",
          },
        },
        required: ["identifier", "password"],
      },
    },
  },
};

const outputFile = "./swagger_output.json";
const endPointsFiles = ["../routes/api.ts"];

swaggerAutogen({
  openapi: "3.0.0",
})(outputFile, endPointsFiles, doc);
