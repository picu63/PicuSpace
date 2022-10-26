using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using PicuSpace.Web;
using MudBlazor.Services;

var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");

builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new(builder.HostEnvironment.BaseAddress) });
builder.Services.AddHttpClient(Consts.BlogApiHttpClientName, client => client.BaseAddress = new("https://picu-blog-api.herokuapp.com/api/"));
builder.Services.AddSingleton(sp =>
{
    var configurationSection = builder.Configuration.GetSection(nameof(AppSettings));
    return new AppSettings();
});
builder.Services.AddMudServices();
await builder.Build().RunAsync();