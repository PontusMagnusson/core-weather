FROM mcr.microsoft.com/dotnet/core/sdk:2.2 as builder
WORKDIR /app

# Cache restore result
COPY *.csproj .
RUN dotnet restore

# Copy code
COPY . .
WORKDIR /app/
RUN dotnet publish -c Release -o out

# Copy built code
FROM mcr.microsoft.com/dotnet/core/aspnet:2.2 AS runtime
WORKDIR /app
COPY --from=builder /app/out ./
EXPOSE 5000
ENTRYPOINT ["dotnet", "ClimaMundi.Api.dll"]