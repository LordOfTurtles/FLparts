using FirstReact.Contracts;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FirstReact.Controllers
{
    [Route("api/users")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository _userRepo;

        public UserController(IUserRepository userRepo) => _userRepo = userRepo;

        [HttpGet]
        public async Task<IActionResult> GetUsers()
        {
            var users = await _userRepo.GetUsers();

            return Ok(users);
        }
    }
}