package projeto.lab.mail_todo_ms.consumers;


import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Component;
import projeto.lab.mail_todo_ms.DTO.EmailRecordDTO;
import projeto.lab.mail_todo_ms.model.entity.EmailModel;
import projeto.lab.mail_todo_ms.service.EmailService;

@Component
public class EmailConsumer {

    @Autowired
    EmailService emailService;

    @RabbitListener(queues = "${broker.queue.email.name}")
    public void listenEmail (@Payload EmailRecordDTO emailRecordDTO){
        var email = new EmailModel();
        BeanUtils.copyProperties(emailRecordDTO, email);

    }
}
