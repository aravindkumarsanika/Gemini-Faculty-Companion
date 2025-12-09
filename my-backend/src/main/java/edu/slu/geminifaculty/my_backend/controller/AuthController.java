
// package edu.slu.geminifaculty.my_backend.controller;

// import edu.slu.geminifaculty.my_backend.dto.AuthResponse;
// import edu.slu.geminifaculty.my_backend.dto.LoginRequest;
// import edu.slu.geminifaculty.my_backend.dto.RegisterRequest;
// import edu.slu.geminifaculty.my_backend.service.AuthService;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;

// import java.util.HashMap;
// import java.util.Map;

// @RestController
// @RequestMapping("/api/auth")
// @CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")

// public class AuthController {

//     private final AuthService authService;

//     @Autowired
//     public AuthController(AuthService authService) {
//         this.authService = authService;
//     }

//     @PostMapping("/register")
//     public ResponseEntity<?> register(@RequestBody RegisterRequest request) {
//         try {
//             AuthResponse response = authService.register(request);
//             return ResponseEntity.status(HttpStatus.CREATED).body(response);
//         } catch (Exception e) {
//             Map<String, String> error = new HashMap<>();
//             error.put("error", e.getMessage());
//             return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(error);
//         }
//     }

//     @PostMapping("/login")
//     public ResponseEntity<?> login(@RequestBody LoginRequest request) {
//         try {
//             AuthResponse response = authService.login(request);
//             return ResponseEntity.ok(response);
//         } catch (Exception e) {
//             Map<String, String> error = new HashMap<>();
//             error.put("error", e.getMessage());
//             return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(error);
//         }
//     }

//     @GetMapping("/test")
//     public ResponseEntity<String> test() {
//         return ResponseEntity.ok("Auth endpoint is working!");
//     }
// }
package edu.slu.geminifaculty.my_backend.controller;

import edu.slu.geminifaculty.my_backend.dto.LoginRequest;
import edu.slu.geminifaculty.my_backend.dto.RegisterRequest;
import edu.slu.geminifaculty.my_backend.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, Object> req) {

        // Extract values safely
        String email = (String) req.getOrDefault("email", "");
        String password = (String) req.getOrDefault("password", "");
        String role = (String) req.getOrDefault("role", "");
        String adminCode = (String) req.getOrDefault("adminCode", "");

        List<String> ADMIN_CODES = List.of("ADM-UNI-2025", "ADM-001", "ADM-987");

        // -------- ADMIN --------
        if (role.equalsIgnoreCase("ADMIN")) {

            if (!email.equalsIgnoreCase("Tatiana.Cardona@silverleaf.edu")) {
                return ResponseEntity.status(401).body(Map.of("error", "Unauthorized admin email"));
            }

            if (!password.equals("tatiana")) {
                return ResponseEntity.status(401).body(Map.of("error", "Invalid password"));
            }

            if (!ADMIN_CODES.contains(adminCode)) {
                return ResponseEntity.status(401).body(Map.of("error", "Invalid Admin Unique ID"));
            }

            return ResponseEntity.ok(Map.of(
                    "token", "ADMIN_STATIC_TOKEN",
                    "role", "ADMIN",
                    "firstName", "Tatiana",
                    "lastName", "Cardona",
                    "email", email));
        }

        // -------- FACULTY --------
        if (role.equalsIgnoreCase("FACULTY")) {

            if (!email.equalsIgnoreCase("maria.weber@silverleaf.edu")) {
                return ResponseEntity.status(401).body(Map.of("error", "Unauthorized faculty email"));
            }

            if (!password.equals("maria")) {
                return ResponseEntity.status(401).body(Map.of("error", "Invalid password"));
            }

            return ResponseEntity.ok(Map.of(
                    "token", "FACULTY_STATIC_TOKEN",
                    "role", "FACULTY",
                    "firstName", "Maria",
                    "lastName", "Weber",
                    "email", email));
        }

        return ResponseEntity.status(400).body(Map.of("error", "Invalid login request"));
    }
}
