using API.Settings;
using Core.Interfaces;
using Infrastructure.Data.Context;
using Infrastructure.Data.Repositoris;
using Microsoft.EntityFrameworkCore;
using MongoDB.Bson;
using MongoDB.Bson.Serialization;
using MongoDB.Bson.Serialization.Serializers;
using MongoDB.Driver;
using Microsoft.EntityFrameworkCore.Design;

var builder = WebApplication.CreateBuilder(args);
var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

builder.Services.AddCors(options =>
{
    options.AddPolicy(MyAllowSpecificOrigins, builder =>
                          {
                              builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
                          });
});


//---------sql 
var cs = builder.Configuration.GetConnectionString("MsSQL");
builder.Services.AddDbContext<DataContext>(options => options.UseSqlServer(cs));
builder.Services.AddScoped<IAlbumRepository, AlbumRepository>();
builder.Services.AddScoped<IAuthorRepository, AuthorRepository>();
builder.Services.AddScoped<ISongRepository, SongRepository>();  




builder.Services.AddControllers( opt => 
{ 
    opt.SuppressAsyncSuffixInActionNames = false;
});
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//BsonSerializer.RegisterSerializer(new GuidSerializer(BsonType.String));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
   
}

app.UseSwagger();
app.UseSwaggerUI();
app.UseStatusCodePagesWithReExecute("/errors/{0}");

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseCors(MyAllowSpecificOrigins);

app.UseAuthorization();

app.MapControllers();

app.Run();
