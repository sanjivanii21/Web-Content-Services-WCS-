package backend.controller;

import backend.entity.ContactInquiry;
import backend.service.ContactInquiryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "*")
public class ContactInquiryController {

    private final ContactInquiryService contactInquiryService;

    // Constructor injection for the service
    public ContactInquiryController(ContactInquiryService contactInquiryService) {
        this.contactInquiryService = contactInquiryService;
    }

    // Handles Contact / Service form submission
    @PostMapping
    public ResponseEntity<ContactInquiry> submitInquiry(
            @RequestBody ContactInquiry inquiry) {

        // Save the submitted inquiry in the database
        ContactInquiry savedInquiry =
                contactInquiryService.saveInquiry(inquiry);

        return ResponseEntity.ok(savedInquiry);
    }
}