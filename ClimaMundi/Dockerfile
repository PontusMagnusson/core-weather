# Configure runtime
FROM mcr.microsoft.com/dotnet/core/aspnet:2.2 AS base
EXPOSE 5000
# Configure build env.
FROM mcr.microsoft.com/dotnet/core/sdk:2.2 AS builder
WORKDIR /app
COPY . .
RUN dotnet restore
RUN dotnet publish -c Release -o out
RUN dotnet test --no-build -c Release -v normal

# Copy built code
FROM base AS runtime
WORKDIR /app
COPY --from=builder /app/ClimaMundi.Api/out ./
ENTRYPOINT ["dotnet", "ClimaMundi.Api.dll"]