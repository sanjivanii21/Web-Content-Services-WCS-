package backend.repository;

import backend.entity.ContactInquiry;
import org.springframework.data.jpa.repository.JpaRepository;

// Repository handles database operations for ContactInquiry
public interface ContactInquiryRepository extends JpaRepository<ContactInquiry, Integer> {

    // JpaRepository already provides methods like:
    // save(), findAll(), findById(), deleteById(), etc.
}