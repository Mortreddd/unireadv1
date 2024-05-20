FROM openjdk:22-jdk-slim

VOLUME /tmp

ARG JAR_FILE=target/uniread-0.0.1-SNAPSHOT.jar
COPY ${JAR_FILE} app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "/app.jar"]
