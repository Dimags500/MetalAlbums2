using Core.Entites;
using Core.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SongController : ControllerBase
    {

        private readonly ISongRepository songRepository;

        public SongController(ISongRepository songRepository)
        {
            this.songRepository = songRepository;
        }



        [HttpGet]
        public async Task<ActionResult<IReadOnlyCollection<Song>>> GetAllSongs()
        {
            var songs = await songRepository.GetAllSongAsync();
            return Ok(songs);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Song>> GetSongById(int id)
        { 
            var song = await songRepository.GetSongAsync(id);

            if (song == null)
            {
                return NotFound();
            }
            return Ok(song);
        }


        [HttpPost]
        public async Task<ActionResult<Album>> CreateSong(Song song)
        {
            var newSong = new Song()
            {
                Name = song.Name,
                Year = song.Year,
                TrackNumber = song.TrackNumber,
                AlbumID = song.AlbumID ,
                AuthorID = song.AuthorID

            };

            var res = await songRepository.AddSongAsync(newSong);


            //return CreatedAtAction(nameof(GetAlbumByIdAsync), new { Id = newAlbum.Id }, newAlbum);

            return Ok(res);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Song>> UpdateSongById(int id , Song song)
        {
            var prevData = await songRepository.GetSongAsync(id);

            if (prevData == null)
            {
                return NotFound();
            }


            prevData.Name = song.Name;
            prevData.Year = song.Year;
            prevData.TrackNumber = song.TrackNumber;
            prevData.AuthorID = song.AuthorID;
            prevData.AlbumID = song.AlbumID;

           return await songRepository.UpdateSongAsync(prevData);
        }

        [HttpDelete]
        public async Task<ActionResult<bool>> DeleteSongById(int id)
        {
            var toDelete = songRepository.GetSongAsync(id).Result;

            if (toDelete == null)
            {
                return NotFound();
            }

            var res = await songRepository.DeleteSongAsync(toDelete);

            return res;
        }

        

    }
}