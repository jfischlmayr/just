using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ToDoController : ControllerBase
    {

        private readonly JustDataContext _context;

        public ToDoController(JustDataContext context)
        {
            _context = context;
        }

        // GET: api/<ToDoController>
        [HttpGet]
        public async Task<IEnumerable<ToDo>> GetToDos()
        {
            return await _context.ToDos.ToListAsync();
        }

        // GET api/<ToDoController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ToDo>> GetToDo(int id)
        {
            var project = await _context.ToDos.FindAsync(id);

            if (project == null)
            {
                return NotFound();
            }

            return project;
        }

        // POST api/<ToDoController>
        [HttpPost]
        public async Task<ActionResult<ToDo>> PostToDo(ToDo todo)
        {
            _context.ToDos.Add(todo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetToDo", new { id = todo.ID }, todo);
        }

        // PUT api/<ToDoController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutToDo(int id, ToDo toDo)
        {
            if (id != toDo.ID)
            {
                return BadRequest();
            }

            _context.Entry(toDo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ToDoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        private bool ToDoExists(int id)
        {
            return _context.ToDos.Any(e => e.ID == id);
        }

        // DELETE api/<ToDoController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteToDo(int id)
        {
            var toDo = await _context.ToDos.FindAsync(id);
            if (toDo == null)
            {
                return NotFound();
            }

            _context.ToDos.Remove(toDo);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
