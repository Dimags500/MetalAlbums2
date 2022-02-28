using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entites
{
    public class Song : BaseEntity
    {

       
        public int Year { get; set; }
        public int TrackNumber { get; set; }

        public int AlbumID { get; set; }

        public int AuthorID { get; set; }

    }
}
