package telran.poc.pagination.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import telran.poc.pagination.model.Person;
import telran.poc.pagination.repository.PersonRepository;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class PersonController {

    @Autowired
    PersonRepository personRepository;

    @GetMapping("/persons")
    public List<Person> getPersons() {

        List<Person> result = new ArrayList<>();

        personRepository.findAll().forEach(result::add);

        return result;

    }

    @GetMapping(value = "/persons", params = {"page"})
    public List<Person> getPersonsByPageAndSize(@RequestParam("page") int page ){
        Pageable pageable = PageRequest.of(page, 70);
        Page<Person> personPage = personRepository.findAll(pageable);
        return personPage.getContent();
    }
}
