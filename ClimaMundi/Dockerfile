# Configure ports etc.
FROM mcr.microsoft.com/dotnet/core/aspnet:2.2 AS base
EXPOSE 5000

FROM mcr.microsoft.com/dotnet/core/sdk:2.2 AS builder
WORKDIR /app
# Cache restore result
COPY *.sln .
COPY **/*.csproj ./
RUN dotnet restore *.sln

# Copy code
COPY . .
WORKDIR /app/
RUN dotnet publish -c Release -o out
RUN dotnet test --no-build -c Release -v detailed

# Copy built code
FROM base AS runtime
WORKDIR /app
COPY --from=builder /app/out ./
EXPOSE 5000
ENTRYPOINT ["dotnet", "ClimaMundi.Api.dll"]