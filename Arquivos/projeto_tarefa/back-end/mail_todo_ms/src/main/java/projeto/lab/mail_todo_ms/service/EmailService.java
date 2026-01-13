package projeto.lab.mail_todo_ms.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import projeto.lab.mail_todo_ms.model.entity.EmailModel;
import projeto.lab.mail_todo_ms.repository.EmailRepository;

import java.time.LocalDateTime;

@Service
public class EmailService {

    @Autowired
    EmailRepository emailRepository;

    @Autowired
    JavaMailSender javaMailSender;

    public void sendEmail(EmailModel emailModel){
        try{
            emailModel.setEmailDate(LocalDateTime.now());

            SimpleMailMessage message = new SimpleMailMessage();

            message.setTo(emailModel.getEmailTo());
            message.setSubject(emailModel.getSubject());
            message.setText(emailModel.getText());
            javaMailSender.send(message);

        }catch (RuntimeException exception){
            throw new RuntimeException("Erro ao enviar email");
        }
    }
}
