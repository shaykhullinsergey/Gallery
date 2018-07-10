using System;
using System.IO.Compression;
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;

namespace Gallery.Web
{
	public class Startup
	{
		public void ConfigureServices(IServiceCollection services)
		{
			services.AddDbContext<MessageDbContext>(options =>
				options.UseInMemoryDatabase(nameof(MessageDbContext)));
			
			services.AddScoped<IMessageService, MessageService>();

			services.AddIdentity<IdentityUser, IdentityRole>()
				.AddEntityFrameworkStores<IdentityDbContext>()
				.AddDefaultTokenProviders();
			
			services.AddResponseCompression();
			services.AddSignalR();
			services.AddMvc();
		}

		public void Configure(IApplicationBuilder app, IHostingEnvironment env)
		{
			if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
			}

			app.UseResponseCompression();
			app.UseStaticFiles();

			app.UseAuthentication();
			
			app.UseSignalR(routes =>
			{
				routes.MapHub<MessageHub>("/message");
			});
			
			app.UseMvc(routes =>
			{
				routes.MapRoute(
					name: "default",
					template: "{controller=Home}/{action=Index}/{id?}");
				
				routes.MapSpaFallbackRoute(
					name: "spa-fallback",
					defaults: new { controller = "Home", action = "Index" });
			});
			
		}
	}
}