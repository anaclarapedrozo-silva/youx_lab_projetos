package projeto.lab.mail_todo_ms.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import projeto.lab.mail_todo_ms.model.entity.EmailModel;

public interface EmailRepository extends JpaRepository<EmailModel, String> {


}
