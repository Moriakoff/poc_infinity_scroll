package telran.poc.pagination;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import telran.poc.pagination.model.Person;
import telran.poc.pagination.repository.PersonRepository;

@Component
public class Runner implements CommandLineRunner {

    @Autowired
    PersonRepository personRepository;

    @Override
    public void run(String... args) throws Exception {

        Person person;
        String firstName;
        String lastName;


        for (int i = 0; i < 1000; i++) {
            firstName = "firstName" + i;
            lastName = "lastName" + i;
            person = new Person(i, firstName, lastName);

            personRepository.save(person);
        }

    }
}
