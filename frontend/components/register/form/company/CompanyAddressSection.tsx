import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChangeEvent } from "react";
import { ZodError, ZodIssue } from "zod";

interface CompanyAddressSectionProps {
  address: string;
  onAddressChange: (e: ChangeEvent<HTMLInputElement>) => void;
  errorAddressSection: ZodError | null;
}

export function CompanyAddressSection({
  address,
  onAddressChange,
  errorAddressSection,
}: CompanyAddressSectionProps) {
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="space-y-2">
        <Label htmlFor="companyAddress">Adresse complète</Label>
        <Input
          id="companyAddress"
          placeholder="Ex: 123 Avenue des Champs-Élysées, 75008 Paris"
          value={address}
          onChange={onAddressChange}
          required
        />
        {errorAddressSection && (
          <p className="text-sm text-destructive">
            {
              errorAddressSection.errors.find(
                (error: ZodIssue) => error.path[0] === "address",
              )?.message
            }
          </p>
        )}
        <p className="text-sm text-muted-foreground">
          Indiquez l&apos;adresse complète du siège social de votre entreprise.
        </p>
      </div>
    </div>
  );
}
