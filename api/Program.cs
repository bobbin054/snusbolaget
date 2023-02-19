
using Microsoft.EntityFrameworkCore;
using Snusbolaget.API.Services;
using SnusBolaget.API.DBContexts;
using SnusBolaget.API.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


builder.Services.AddDbContext<SnusbolagetContext>(
    dbContextOptions => dbContextOptions.UseSqlite(@"Data Source=snusbolaget.db;"));
builder.Services.AddScoped<IProductsRepository, ProductsRepository>();
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
