package telran.poc.pagination.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import telran.poc.pagination.model.Person;

public interface PersonRepository extends PagingAndSortingRepository<Person,Integer> {
}
