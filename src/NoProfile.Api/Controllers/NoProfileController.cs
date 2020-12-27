using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using NoProfile.Api.Models;

namespace NoProfile.Api.Controllers
{
    [ApiController]
    [Route("api/no-profile")]
    public class NoProfileController : ControllerBase
    {

        [HttpPost("create")]
        public async Task<string> Create(CreateDto dto)
        {
            var id = await Nanoid.Nanoid.GenerateAsync();
            await RedisHelper.SetAsync(id, dto.Content, dto.ExpireDate - DateTime.UtcNow);
            return id;
        }

        [HttpGet("{id}")]
        public async Task<string> Get(string id)
        {
            return await RedisHelper.GetAsync(id);
        }
    }
}
