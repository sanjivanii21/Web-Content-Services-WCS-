package backend.service;

import backend.entity.ContactInquiry;
import backend.repository.ContactInquiryRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class ContactInquiryService {

    private final ContactInquiryRepository contactInquiryRepository;

    // Constructor injection for the repository
    public ContactInquiryService(ContactInquiryRepository contactInquiryRepository) {
        this.contactInquiryRepository = contactInquiryRepository;
    }

    // Saves a new contact inquiry into the database
    public ContactInquiry saveInquiry(ContactInquiry inquiry) {

        // Automatically store the submission date and time
        inquiry.setSubmittedAt(LocalDateTime.now());

        return contactInquiryRepository.save(inquiry);
    }
}