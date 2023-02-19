
using Microsoft.EntityFrameworkCore;
using Snusbolaget.API.Services;
using SnusBolaget.API.DBContexts;
using SnusBolaget.API.Services;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors(options => options.AddDefaultPolicy(
        policy => policy.WithOrigins("http://127.0.0.1:5173")
                .AllowAnyHeader()
                .AllowAnyMethod()
        )
);
builder.Services.AddControllers();
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
app.UseCors();
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();
