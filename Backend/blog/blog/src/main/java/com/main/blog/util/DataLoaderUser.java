package com.main.blog.util;

import com.main.blog.dto.RequestUserDto;
import com.main.blog.model.User;
import com.main.blog.service.interfaces.IAuthorizationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@Profile("!test")
public class DataLoaderUser implements CommandLineRunner {

    @Autowired
    private IAuthorizationService authorizationService;

    @Override
    public void run(String... args) throws Exception {

        RequestUserDto user;

        user = RequestUserDto.builder()
                .name("Gonzalo")
                .lastName("Montiel")
                .email("cachete@gmail.com")
                .password("password")
                .phone("12345")
                .build();
        authorizationService.save(user);

        user = RequestUserDto.builder()
                .name("Nicolas")
                .lastName("Tagliafico")
                .email("tagliafico@gmail.com")
                .password("password")
                .phone("12345")
                .build();
        authorizationService.save(user);

        user = RequestUserDto.builder()
                .name("Julián")
                .lastName("Álvarez")
                .email("laarania@gmail.com")
                .password("password")
                .phone("123456")
                .build();
        authorizationService.save(user);

        user = RequestUserDto.builder()
                .name("Paulo")
                .lastName("Dybala")
                .email("dybala@gmail.com")
                .password("password")
                .phone("123456")
                .build();
        authorizationService.save(user);

        user = RequestUserDto.builder()
                .name("Gonzalo")
                .lastName("Montiel")
                .email("montiel@gmail.com")
                .password("password")
                .phone("123456")
                .build();
        authorizationService.save(user);

        user = RequestUserDto.builder()
                .name("Nahuel")
                .lastName("Molina")
                .email("molina@gmail.com")
                .password("password")
                .phone("123456")
                .build();
        authorizationService.save(user);

        user = RequestUserDto.builder()
                .name("Nicolás ")
                .lastName("Otamendi")
                .email("otamendi@gmail.com")
                .password("password")
                .phone("123456")
                .build();
        authorizationService.save(user);

        user = RequestUserDto.builder()
                .name("Rodrigo")
                .lastName("De Paul")
                .email("depaul@gmail.com")
                .password("password")
                .phone("123456")
                .build();
        authorizationService.save(user);

        user = RequestUserDto.builder()
                .name("Cristian")
                .lastName("Romero")
                .email("cuti@gmail.com")
                .password("password")
                .phone("123456")
                .build();
        authorizationService.save(user);

        user = RequestUserDto.builder()
                .name("Lisandro")
                .lastName("Martinez")
                .email("licha@gmail.com")
                .password("password")
                .phone("123456")
                .build();
        authorizationService.save(user);


        /* ROLE_ADMIN */
        user = RequestUserDto.builder()
                .name("Emiliano")
                .lastName("Martinez")
                .email("dibu@gmail.com")
                .password("password")
                .phone("123456")
                .build();
        authorizationService.save(user);

        user = RequestUserDto.builder()
                .name("Lionel")
                .lastName("Messi")
                .email("lapulga@gmail.com")
                .password("password")
                .phone("123456")
                .build();
        authorizationService.saveAdmin(user);

        user = RequestUserDto.builder()
                .name("Marcos")
                .lastName("Acuña")
                .email("huevo@gmail.com")
                .password("password")
                .phone("123456")
                .build();
        authorizationService.saveAdmin(user);

        user = RequestUserDto.builder()
                .name("Alexis")
                .lastName("Mac Allister ")
                .email("macallister@gmail.com")
                .password("password")
                .phone("123456")
                .build();
        authorizationService.saveAdmin(user);

        user = RequestUserDto.builder()
                .name("Enzo")
                .lastName("Fernandez")
                .email("enzo@gmail.com")
                .password("password")
                .phone("123456")
                .build();
        authorizationService.saveAdmin(user);

        user = RequestUserDto.builder()
                .name("Leandro")
                .lastName("Paredes")
                .email("paredes@gmail.com")
                .password("password")
                .phone("123456")
                .build();
        authorizationService.saveAdmin(user);

        user = RequestUserDto.builder()
                .name("Lautaro")
                .lastName("Martinez")
                .email("eltoro@gmail.com")
                .password("password")
                .phone("123456")
                .build();
        authorizationService.saveAdmin(user);

        user = RequestUserDto.builder()
                .name("Ángel")
                .lastName("Di Maria")
                .email("fideo@gmail.com")
                .password("password")
                .phone("123456")
                .build();
        authorizationService.saveAdmin(user);

        user = RequestUserDto.builder()
                .name("Ángel")
                .lastName("Correa")
                .email("correa@gmail.com")
                .password("password")
                .phone("123456")
                .build();
        authorizationService.saveAdmin(user);

        user = RequestUserDto.builder()
                .name("Exequiel")
                .lastName("Palacios")
                .email("palacios@gmail.com")
                .password("password")
                .phone("123456")
                .build();
        authorizationService.saveAdmin(user);

    }
}
