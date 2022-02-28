using API.Dtos;
using Core.Entites;
using Core.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class AuthorController : ControllerBase
    {
        private readonly IAuthorRepository authorRepository;

        public AuthorController(IAuthorRepository authorRepository)
        {
            this.authorRepository = authorRepository;
        }


        [HttpGet]

        public async Task<ActionResult<IReadOnlyCollection<Author>>> GetAuthors()
        {
            var authors = await authorRepository.GetAllAuthorsAsync();

            List<AuthorDto> dtos = new List<AuthorDto>();

            foreach (var item in authors)
            {
                dtos.Add(new AuthorDto() { Id = item.Id, Name = item.Name });
            }

            return Ok(dtos);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Author>> GetAuthorById(int id)
        {
            var author = await authorRepository.GetAuthorAsync(id);

            if(author == null)
            {
                return NotFound();
            }

            var dto = new AuthorDto() { Id = author.Id, Name = author.Name };
            return Ok(dto);
        }

        [HttpPost]
        public async Task<ActionResult<Author>> PostAuthor( CreateAuthorDto author)
        {
            var newAuthor = new Author() {Name = author.Name };

            return await authorRepository.AddAuthorAsync(newAuthor);
        }

        [HttpDelete]

        public async Task<ActionResult> DeleteAuthor(int id)
        { 
           await authorRepository.DeleteAuthorAsync(id);

            return Ok();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateAlbumAsync(int id, UpdateAuthorDto newData)
        {
            var oldData = await authorRepository.GetAuthorAsync(id);

            if (oldData == null)
            {
                return NotFound();
            }

            oldData.Name = newData.Name;
            await authorRepository.UpdateAuthorAsync(oldData);
            return Ok();
        }

    }
}
