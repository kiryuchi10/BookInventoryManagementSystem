package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Branch;
import com.example.demo.repository.BranchRepository;

@Service
public class BranchService {
    @Autowired
    private BranchRepository branchRepository;

    public List<Branch> getAllBranches() {
        return branchRepository.findAll();
    }

    public Branch getBranchById(Long branchId) {
        return branchRepository.findById(branchId).orElse(null);
    }

    public Branch createBranch(Branch branch) {
        return branchRepository.save(branch);
    }

    public Branch updateBranch(Long branchId, Branch branchDetails) {
        Branch branch = branchRepository.findById(branchId).orElse(null);
        if (branch != null) {
            branch.setName(branchDetails.getName());
            branch.setLocation(branchDetails.getLocation());
            branch.setContactInfo(branchDetails.getContactInfo());
            branch.setCreatedAt(branchDetails.getCreatedAt());
            return branchRepository.save(branch);
        }
        return null;
    }

    public void deleteBranch(Long branchId) {
        branchRepository.deleteById(branchId);
    }
}
