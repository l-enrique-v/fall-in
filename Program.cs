using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using fall_in.Data;
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<fall_inContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("fall_inContext") ?? throw new InvalidOperationException("Connection string 'fall_inContext' not found.")));

// Add services to the container.

builder.Services.AddControllersWithViews();
builder.Services.AddCors();
var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.UseCors(options =>
{
    options.AllowAnyOrigin()
           .AllowAnyHeader()
           .AllowAnyMethod();
});

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

app.Run();

