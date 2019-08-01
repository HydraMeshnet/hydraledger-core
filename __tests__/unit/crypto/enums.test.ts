import "jest-extended";
import * as enums from "../../../packages/crypto/src/enums";

describe("Constants", () => {
    it("transaction types are defined", () => {
        expect(enums.TransactionTypes).toBeDefined();

        expect(enums.TransactionTypes.Transfer).toBeDefined();
        expect(enums.TransactionTypes.Transfer).toBe(0);

        expect(enums.TransactionTypes.SecondSignature).toBeDefined();
        expect(enums.TransactionTypes.SecondSignature).toBe(1);

        expect(enums.TransactionTypes.DelegateRegistration).toBeDefined();
        expect(enums.TransactionTypes.DelegateRegistration).toBe(2);

        expect(enums.TransactionTypes.Vote).toBeDefined();
        expect(enums.TransactionTypes.Vote).toBe(3);

        expect(enums.TransactionTypes.MultiSignature).toBeDefined();
        expect(enums.TransactionTypes.MultiSignature).toBe(4);

        expect(enums.TransactionTypes.Ipfs).toBeDefined();
        expect(enums.TransactionTypes.Ipfs).toBe(5);

        expect(enums.TransactionTypes.MultiPayment).toBeDefined();
        expect(enums.TransactionTypes.MultiPayment).toBe(6);

        expect(enums.TransactionTypes.DelegateResignation).toBeDefined();
        expect(enums.TransactionTypes.DelegateResignation).toBe(7);

        expect(enums.TransactionTypes.HtlcLock).toBeDefined();
        expect(enums.TransactionTypes.HtlcLock).toBe(8);

        expect(enums.TransactionTypes.HtlcClaim).toBeDefined();
        expect(enums.TransactionTypes.HtlcClaim).toBe(9);

        expect(enums.TransactionTypes.HtlcRefund).toBeDefined();
        expect(enums.TransactionTypes.HtlcRefund).toBe(10);
    });
});
