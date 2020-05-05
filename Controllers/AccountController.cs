using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using PPR.App.JwtHelpers;
using PPR.Domain.Models;
using PPR.DTOs;
using PPR.Utils;

namespace PPR.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        #region Dependencies
        protected UserManager<User> userManager;
        protected RoleManager<Role> roleManager;
        protected SignInManager<User> signInManager;
        protected IConfiguration config;
        #endregion 

        #region Constructor
        public AccountController(UserManager<User> _userManager, SignInManager<User> _signInManager, RoleManager<Role> _roleManager, IConfiguration _config)
        {
            userManager = _userManager;
            roleManager = _roleManager;
            signInManager = _signInManager;
            config = _config;
        }

        #endregion

        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginDTO model)
        {
            var result = await signInManager.PasswordSignInAsync(model.Username, model.Password, false, false);
            if (result.Succeeded)
            {
                var user = await userManager.FindByNameAsync(model.Username);
                var token = user.GenerateToken(config);

                CookieOptions options = new CookieOptions();
                options.Expires = DateTime.Now.AddMinutes(20);
                HttpContext.Response.Cookies.Append("token", token, options);

                return Ok(new CustomResponse<User> { Message = Global.ResponseMessages.Success, StatusCode = StatusCodes.Status200OK, Result = user });

                // if (await userManager.IsInRoleAsync(user, "Admin"))
                // {
                //     return RedirectToAction("Index", "Dashboard", new { area = "Admin" });
                // }
                // else
                // {
                //     return RedirectToAction("Index", "Dashboard", new { area = "User" });
                // }
            }
            else
            {
                return Ok(new CustomResponse<Error>
                {
                    Message = Global.ResponseMessages.Forbidden,
                    StatusCode = StatusCodes.Status403Forbidden,
                    Result = new Error { ErrorMessage = Global.ResponseMessages.GenerateInvalid("username or password") }
                });
            }
        }

        [HttpPost("create")]
        public async Task<IActionResult> Create(UserDTO model)
        {
            User user = new User
            {
                Email = model.Email,
                UserName = model.UserName,
                PhoneNumber = model.PhoneNumber
            };
            var ressult = await userManager.CreateAsync(user, model.Password);
            if (ressult.Succeeded)
            {
                // var role = await roleManager.FindByNameAsync("Admin");
                var role = await roleManager.FindByNameAsync("User");
                if (role != null)
                {
                    var r = await userManager.AddToRoleAsync(user, role.Name);
                    if (r.Succeeded)
                    {
                        return Ok(new CustomResponse<UserDTO> { Message = Global.ResponseMessages.Success, StatusCode = StatusCodes.Status200OK, Result = model });
                    }
                }

            }

            return Ok(new CustomResponse<string> { Message = Global.ResponseMessages.BadRequest, StatusCode = StatusCodes.Status400BadRequest, Result = "Some thing wrong with your Request." });

        }

        [HttpGet("logout")]
        public async Task<IActionResult> LogOut()
        {
            await signInManager.SignOutAsync();
            return Ok(true);
        }
    }
}