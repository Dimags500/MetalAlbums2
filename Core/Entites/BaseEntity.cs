using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entites
{
    public class BaseEntity
    {
        //public Guid Id { get; set; } = new Guid();

        [Required]
        public int Id { get; set; }

        [Column(TypeName = "varchar(60)")]

        public string Name { get; set; }

    }
}
