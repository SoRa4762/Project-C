import { useEffect, useState } from "react";
import { deleteOneCitizen, getAllCitizen } from "@/api/citizen";
import { CitizenshipInterface } from "@/interfaces/citizenInteface";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const CitizenDetails: React.FC = () => {
  const { toast } = useToast();
  const [citizenshipDetails, setCitizenshipDetails] = useState([]);
  const handleDeleteCitizen = async (citizenId: string) => {
    try {
      const response = await deleteOneCitizen(citizenId);
      console.log(response);
      const updatedCitizenshipDetails = citizenshipDetails.filter(
        (citizen: CitizenshipInterface) => citizen.citizen_id !== citizenId
      );
      setCitizenshipDetails(updatedCitizenshipDetails);

      toast({
        title: "Success",
        description: `Citizen deleted successfully`,
      });
    } catch (err) {
      toast({
        title: "Error",
        description: `Citizen Id not found: ${err}`,
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    const getCitizenshipDetails = async () => {
      const response = await getAllCitizen();
      setCitizenshipDetails(response?.data.getAllFullCitizenshipInfo);
    };

    getCitizenshipDetails();
  }, []);
  return (
    <>
      <div className="flex items-center gap-2">
        <Link
          to={"/home"}
          className="flex justify-center items-center text-xl h-8 w-8 hover:bg-slate-200 rounded-full"
        >
          <MdOutlineKeyboardArrowLeft />
        </Link>
        <p className="font-bold text-xl">Citizenship Details</p>
      </div>
      <Table>
        <TableCaption>List of all the citienship details.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Citizen ID</TableHead>
            <TableHead>National ID Number</TableHead>
            <TableHead>Passport Number</TableHead>
            <TableHead>Other Identification</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {citizenshipDetails.map((citizen: CitizenshipInterface) => (
            <TableRow key={citizen.citizen_id}>
              <TableCell className="font-medium">
                {citizen.citizen_id}
              </TableCell>
              <TableCell>{citizen.national_id_number}</TableCell>
              <TableCell>{citizen.passport_number}</TableCell>
              <TableCell>{citizen.other_identification}</TableCell>
              <TableCell className="flex gap-2">
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  <FaEdit />
                </Button>
                <Button
                  className="bg-red-600 hover:bg-red-700"
                  onClick={() => handleDeleteCitizen(citizen.citizen_id)}
                >
                  <MdDelete />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default CitizenDetails;
