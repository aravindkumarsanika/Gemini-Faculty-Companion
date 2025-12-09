// package edu.slu.geminifaculty.my_backend.dto;

// import lombok.Data;

// @Data
// public class LoginRequest {
//     private String email;
//     private String password;
// }
//updated asper the github
package edu.slu.geminifaculty.my_backend.dto;

public class LoginRequest {

    private String email;
    private String password;
    private String role;
    private String adminCode;

    // Constructors
    public LoginRequest() {
    }

    public LoginRequest(String email, String password) {
        this.email = email;
        this.password = password;
    }

    // Getters and Setters
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public String getRole() {
        return role;
    }

    public String setRole(String role) {
        return role;
    }

    public String getAdminCode() {
        return adminCode;
    }

    public String setAdminCode(String adminrole) {
        return adminCode;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}