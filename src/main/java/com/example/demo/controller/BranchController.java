package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Branch;
import com.example.demo.service.BranchService;

@RestController
@RequestMapping("/api/branches")
@CrossOrigin(origins = "http://localhost:3000")
public class BranchController {
	private BranchService branchService;

	@Autowired
    public BranchController(BranchService branchService) {
        this.branchService = branchService;
    }

	@GetMapping
	public List<Branch> getAllBranches() {
		return branchService.getAllBranches();
	}

	@GetMapping("/{id}")
	public ResponseEntity<Branch> getBranchById(@PathVariable Long id) {
		Branch branch = branchService.getBranchById(id);
		if (branch != null) {
			return ResponseEntity.ok(branch);
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	@PostMapping
	public Branch createBranch(@RequestBody Branch branch) {
		return branchService.createBranch(branch);
	}

	@PutMapping("/{id}")
	public ResponseEntity<Branch> updateBranch(@PathVariable Long id, @RequestBody Branch branchDetails) {
		Branch updatedBranch = branchService.updateBranch(id, branchDetails);
		if (updatedBranch != null) {
			return ResponseEntity.ok(updatedBranch);
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteBranch(@PathVariable Long id) {
		branchService.deleteBranch(id);
		return ResponseEntity.noContent().build();
	}
}
