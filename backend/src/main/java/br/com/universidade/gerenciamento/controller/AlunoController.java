package br.com.universidade.gerenciamento.controller;

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

import br.com.universidade.gerenciamento.model.Aluno;
import br.com.universidade.gerenciamento.repository.AlunoRepository;

@RestController
public class AlunoController {
	
	@Autowired
	private AlunoRepository alunoRepository;
	
	@GetMapping(value = "/aluno")
	public List<Aluno> findAll() {
		return alunoRepository.findAll();
	}
	
	@GetMapping(value = "/aluno/{id}")
	public ResponseEntity<Aluno> findById(@PathVariable(value = "id") Long id) {
		Optional<Aluno> aluno = alunoRepository.findById(id);
		if (aluno.isPresent())
			return new ResponseEntity<>(aluno.get(), HttpStatus.OK);
		else
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
	
	@PostMapping(value = "/aluno")
	public Aluno save(@Valid @RequestBody Aluno aluno) {
		return alunoRepository.save(aluno);
	}
	
	@PutMapping(value = "/aluno/{id}")
	public ResponseEntity<Aluno> update(@PathVariable(value = "id") Long id, @Valid @RequestBody Aluno newAluno) {
		Optional<Aluno> oldAluno = alunoRepository.findById(id);
		if (oldAluno.isPresent()) {
			Aluno aluno = oldAluno.get();
			aluno.setNome(newAluno.getNome());
			aluno.setCep(newAluno.getCep());
			aluno.setCpf(newAluno.getCpf());
			aluno.setEmail(newAluno.getEmail());
			aluno.setTelefone(newAluno.getTelefone());
			aluno.setEndereco(newAluno.getEndereco());
			aluno.setIdCurso(newAluno.getIdCurso());
			aluno.setMatricula(newAluno.getMatricula());
			alunoRepository.save(aluno);
			return new ResponseEntity<>(aluno, HttpStatus.OK);
		} else
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
	
	@DeleteMapping(value = "/aluno/{id}")
	public ResponseEntity<Object> delete(@PathVariable(value = "id") Long id) {
		Optional<Aluno> aluno = alunoRepository.findById(id);
		if (aluno.isPresent()) {
			alunoRepository.delete(aluno.get());
			return new ResponseEntity<>(HttpStatus.OK);
		} else
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
}
