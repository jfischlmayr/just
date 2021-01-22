using backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TasksController : ControllerBase
    {
        private readonly JustDataContext _context;

        public TasksController(JustDataContext context)
        {
            _context = context;
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(IEnumerable<Models.Task>))]
        public async Task<IActionResult> GetAll()
        {
            var list = await _context.Tasks.ToListAsync();

            return Ok(list.OrderBy(t => t.Name));
        }

        [HttpGet("{id}", Name = nameof(GetById))]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(Models.Task))]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetById(int id)
        {
            var existingTask = await _context.Tasks.FirstOrDefaultAsync(t => t.ID == id);
            if (existingTask == null) return NotFound();
            return Ok(existingTask);
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created, Type = typeof(Models.Task))]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> Add([FromBody] Models.Task newTask)
        {
            if (newTask.ID < 1)
            {
                return BadRequest("Invalid id");
            }

            await _context.Tasks.AddAsync(newTask);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetById), new { id = newTask.ID }, newTask);
        }

        [HttpDelete]
        [Route("{eventToDeleteId}")]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        public async Task<IActionResult> Delete(int taskToDeleteId)
        {
            try
            {
                _context.Tasks.Remove(_context.Tasks.Find(taskToDeleteId));
                await _context.SaveChangesAsync();
            }
            catch (ArgumentException)
            {
                return NotFound();
            }
            return NoContent();
        }
    }
}
