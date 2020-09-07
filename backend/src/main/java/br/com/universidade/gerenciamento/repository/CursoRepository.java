package br.com.universidade.gerenciamento.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.universidade.gerenciamento.model.Curso;

@Repository
public interface CursoRepository extends JpaRepository<Curso, Long> {
	
	List<Curso> findByCursoNome(String nomeCurso);
}
