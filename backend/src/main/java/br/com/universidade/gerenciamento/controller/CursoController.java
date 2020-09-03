package br.com.universidade.gerenciamento.controller;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.universidade.gerenciamento.model.Curso;
import br.com.universidade.gerenciamento.repository.CursoRepository;

@RestController
public class CursoController {

	@Autowired
	private CursoRepository cursoRepository;

	@GetMapping(value = "/curso")
	public List<Curso> findAll() {
		return cursoRepository.findAll();
	}
	
	@GetMapping(value = "/curso/{id}")
	public ResponseEntity<Curso> findById(@PathVariable(value = "id") Long id) {
		Optional<Curso> curso = cursoRepository.findById(id);
		if (curso.isPresent())
			return new ResponseEntity<>(curso.get(), HttpStatus.OK);
		else
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
	
	@PostMapping(value = "/curso")
	public Curso save(@Valid @RequestBody Curso curso) {
		return cursoRepository.save(curso);
	}
	
	@PutMapping(value = "/curso/{id}")
	public ResponseEntity<Curso> update(@PathVariable(value = "id") Long id, @Valid @RequestBody Curso newCurso) {
		Optional<Curso> oldCurso = cursoRepository.findById(id);
		if (oldCurso.isPresent()) {
			Curso curso = oldCurso.get();
			curso.setNome(newCurso.getNome());
			curso.setCargaHoraria(newCurso.getCargaHoraria());
			curso.setCodigo(newCurso.getCodigo());
			curso.setDataCadastro(LocalDateTime.now());
			cursoRepository.save(curso);
			return new ResponseEntity<>(curso, HttpStatus.OK);
		} else
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
	
	@DeleteMapping(value = "/curso/{id}")
	public ResponseEntity<Object> delete(@PathVariable(value = "id") Long id) {
		Optional<Curso> curso = cursoRepository.findById(id);
		if (curso.isPresent()) {
			cursoRepository.delete(curso.get());
			return new ResponseEntity<>(HttpStatus.OK);
		} else
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
}
