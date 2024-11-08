import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import "../../styles/Tables.css";

const checImg = <img src="/check-table.png" alt="check" className="mx-auto" style={{width: "20px"}}/>;

const invoices = [
  {
    invoice: "Manage subscribers",
    paymentStatus: "Up to 1,000",
    totalAmount: "Unlimited",
    paymentMethod: "2,500",
  },
  {
    invoice: "Create email forms",
    paymentStatus: "100/mo",
    totalAmount: "Unlimited",
    paymentMethod: "400/mo",
  },
  {
    invoice: "Customizable domain",
    paymentStatus: checImg,
    totalAmount: checImg,
    paymentMethod: checImg,
  },
  {
    invoice: "Subscribers tagging",
    paymentStatus: checImg,
    totalAmount: checImg,
    paymentMethod: checImg,
  },
  {
    invoice: "Newsletter referral system",
    paymentStatus: "",
    totalAmount: checImg,
    paymentMethod: "",
  },
  {
    invoice: "Automation & emails",
    paymentStatus: "Basic plan",
    totalAmount: "Company plan",
    paymentMethod: "Pro plan",
  },
  {
    invoice: "Send email broadcast",
    paymentStatus: "250/mo",
    totalAmount: "Unlimited",
    paymentMethod: "500/mo",
  },
  {
    invoice: "100+ integrations",
    paymentStatus: "",
    totalAmount: checImg,
    paymentMethod: checImg,
  },
  {
    invoice: "Automated email sequences",
    paymentStatus: "",
    totalAmount: checImg,
    paymentMethod: checImg,
  },
  {
    invoice: "Automated funnels",
    paymentStatus: "",
    totalAmount: checImg,
    paymentMethod: "",
  },
  {
    invoice: "Customizable emails",
    paymentStatus: "",
    totalAmount: checImg,
    paymentMethod: "",
  },
];

const TableDesktop = () => {
  return (
    <div className="table-desktop relative p-[2px] rounded-lg bg-gradient-to-r from-[#e4598f] via-[#06c7f1] to-[#56ee58] group transition-all duration-300 hover:bg-[length:200%_200%] hover:animate-gradient w-full">
      <div className="relative rounded-lg bg-white">
        <Table className="w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[25%]">Audience</TableHead>
              <TableHead className="text-center w-[25%]">Basic plan</TableHead>
              <TableHead className="text-center w-[25%]">Pro plan</TableHead>
              <TableHead className="text-center w-[25%]">
                Company plan
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className="font-medium w-[25%]">
                  {invoice.invoice}
                </TableCell>
                <TableCell className="text-center w-[25%]">
                  {invoice.paymentStatus}
                </TableCell>
                <TableCell className="text-center w-[25%]">
                  {invoice.paymentMethod}
                </TableCell>
                <TableCell className="text-center w-[25%]">
                  {invoice.totalAmount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

interface TableMobileProps {
  currentPlan: number;
}

const TableMobile: React.FC<TableMobileProps> = ({ currentPlan }) => {
  const plans = ["Basic plan", "Pro plan", "Company plan"];

  return (
    <div className="table-mobile relative p-[2px] rounded-lg bg-gradient-to-r from-[#e4598f] via-[#06c7f1] to-[#56ee58] group transition-all duration-300 hover:bg-[length:200%_200%] hover:animate-gradient w-full">
      <div className="relative rounded-lg bg-white">
        <div className="overflow-x-auto">
          <Table className="w-full">
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/2">Feature</TableHead>
                <TableHead className="w-1/2 text-center">Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => {
                let value;
                switch (currentPlan) {
                  case 0:
                    value = invoice.paymentStatus;
                    break;
                  case 1:
                    value = invoice.paymentMethod;
                    break;
                  case 2:
                    value = invoice.totalAmount;
                    break;
                  default:
                    value = "";
                }

                return (
                  <TableRow key={`${plans[currentPlan]}-${invoice.invoice}`}>
                    <TableCell className="font-medium">
                      {invoice.invoice}
                    </TableCell>
                    <TableCell className="text-center">{value}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export { TableDesktop, TableMobile };
