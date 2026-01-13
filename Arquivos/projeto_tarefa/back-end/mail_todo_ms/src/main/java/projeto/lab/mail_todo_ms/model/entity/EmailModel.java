package projeto.lab.mail_todo_ms.model.entity;


import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class EmailModel {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String emailId;
    private String userId;
    private String emailFrom;
    private String emailTo;
    private String subject;
    private String text;
    private LocalDateTime emailDate;

}
