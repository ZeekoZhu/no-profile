FROM mcr.microsoft.com/dotnet/sdk:7.0-alpine as builder

WORKDIR /builder

COPY ./ ./
RUN dotnet tool restore && \
    dotnet publish -c release -o /app -r linux-musl-x64 --self-contained false

FROM mcr.microsoft.com/dotnet/aspnet:7.0-alpine
ENV ASPNETCORE_URLS=http://*:5000

WORKDIR /app

COPY --from=builder /app ./

ENTRYPOINT ["dotnet", "./NoProfile.Api.dll"]
