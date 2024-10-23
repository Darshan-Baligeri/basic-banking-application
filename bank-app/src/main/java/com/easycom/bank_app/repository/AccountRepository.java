package com.easycom.bank_app.repository;

import com.easycom.bank_app.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<Account, Long> {
}
