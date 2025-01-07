"use client"
import {z} from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FaUserCircle } from "react-icons/fa";

// Define the schema for the form data
const commentSchema = z.object({
    name: z.string().min(2,{message:"name must be atleast 3 characters"}).max(20,{message:"name must be maximum 20 characters"}),
    comment: z.union(
        [
        z.string().min(1,{message:"comment must be atleast 0 characters long"}).max(200,{message:"comment must be maximum 200 characters long"}),
        z.number()
        ]
)
}
)
const Comment = () => {
    // use state to display comment 
    const [comments, setComments] = useState<z.infer<typeof commentSchema>[]>([]);
    // 1. Define your form.
  const form = useForm<z.infer<typeof commentSchema>>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      name: "",
      comment: "",
    },
  });
  const onSubmit = (data: z.infer<typeof commentSchema>) => {
    setComments((previousData) => [...previousData, data]); // Add new comment to the list
    form.reset(); // Clear the form fields
  };
  return (
    <div>
        <h5 className="mb-5 text-[#6941C6] font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">Add Comments</h5>
    <div className=' bg-black dark:bg-white rounded-2xl py-16 px-8 text-[#C0c5d0] dark:text-[#667085]'>
        
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                {/* Name Field */}
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
             {/* Comment Field */}
             <FormField
            name="comment"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Comment</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your comment" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Submit Button */}
          <Button type="submit">Submit</Button>
            </form>
        </Form>
         {/* Display Submitted Comments */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-[#6941c6]">Comments</h3>
        {comments.length === 0 ? (
          <p>No comments yet. Be the first to comment!</p>
        ) : (
          <ul className="mt-4 space-y-2">
            {comments.map((comment: z.infer<typeof commentSchema>, index) => (
              <li key={index} className="text-[#C0c5d0] dark:text-black">
                <div className="flex items-center">
                    <FaUserCircle className="text-[30px]" /> 
                    {/* Display Name */}
                    <h4 className="font-black ml-2 text-base ">{comment.name}</h4>
                </div>
                <p className="text-sm my-4 ">{comment.comment}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
    </div>
  )
}

export default Comment
