using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entites
{
    public class Album : BaseEntity
    {


        public int Year { get; set; }

        public string AlbumPicture { get; set; }

        public int AuthorID { get; set; }

    }
}
