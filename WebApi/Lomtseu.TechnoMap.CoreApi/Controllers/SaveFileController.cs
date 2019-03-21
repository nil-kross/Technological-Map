using Lomtseu.TechnoMap.CoreApi.Models;
using Lomtseu.TechnoMap.CoreApi.Services;
using Microsoft.AspNetCore.Mvc;
using System.Text;

namespace Lomtseu.TechnoMap.CoreApi.Controllers
{
    [Route("api/file/save")]
    [ApiController]
    public class SaveFileController : ControllerBase
    {
        [HttpGet()]
        public FileResult Get()
        {
            var fileBytes = Encoding.UTF8.GetBytes(TempFileService.Content);

            return File(fileBytes, "text/plain", "json.txt");
        }

        [HttpPost()]
        public IActionResult Post(ContentModel model)
        {
            TempFileService.Content = model.Content;

            return Ok();
        }
    }
}
