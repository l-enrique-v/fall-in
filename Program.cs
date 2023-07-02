using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using fall_in.Data;
using System.Configuration;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<fall_inContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("fall_inContext") ?? throw new InvalidOperationException("Connection string 'fall_inContext' not found.")));
builder.Services.AddDbContext<hobbiesContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("fall_inContext")));
// Add services to the container.

builder.Services.AddControllersWithViews();

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


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

app.Run();

