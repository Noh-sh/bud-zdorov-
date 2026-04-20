# Skill: Quality-Chain (Automated Agent-to-Agent Workflow)

This skill defines the high-level procedure for ensuring absolute code quality through a synchronized chain of specialized agents.

## Procedure
1.  **Phase 1: Finish Line**: A major code task is completed.
2.  **Phase 2: The Audit**: Invoke the **Code-Auditor** mission.
    - Auditor scans `src/components/` and `src/app/`.
    - Auditor identifies reusability violations, i18n gaps, or mobile adaptation issues.
    - Auditor provides a report with ✅, ⚠️, and 🛑.
3.  **Phase 3: The Repair (If needed)**: If any 🛑 [BLOCKER] or ⚠️ [ADVISORY] issues are found, invoke the **Code-Fixer** mission.
    - Fixer refactors the code to resolve all Auditor findings.
    - Fixer ensures no new issues are introduced.
4.  **Phase 4: Verification**: Run the **Spec-Check** skill to confirm that the requirements (and the fixes) are perfectly met.
5.  **Phase 5: Completion**: Report to the user with "QUALITY CHAIN COMPLETE: Code is optimized and verified."

---
*Note for AI: Always run this chain after large commits or when the user says "Run the quality chain".*
