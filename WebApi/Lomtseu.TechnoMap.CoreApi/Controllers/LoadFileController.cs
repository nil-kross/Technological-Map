
using Lomtseu.TechnoMap.CoreApi.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.IO;

namespace Lomtseu.TechnoMap.CoreApi.Controllers
{
    [Route("api/file/load")]
    [ApiController]
    public class LoadFileController : ControllerBase
    {
        [HttpPost()]
        public IActionResult Post(ContentModel model)
        {
            var pathway = model.Content;
            var content = "";
            
            if (System.IO.File.Exists(pathway))
            {
                var stream = System.IO.File.OpenText(pathway);

                content = stream.ReadToEnd();

                return Ok(content);
            }

            return NotFound();
        }
    }
}
