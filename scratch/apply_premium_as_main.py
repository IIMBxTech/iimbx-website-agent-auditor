import shutil

# The user wants the new premium design to be the MAIN contact page. 
# The main contact page in the linking system is contact_v2_stitch.html.
# I will overwrite it so the user sees the new design everywhere automatically.

def apply_premium_as_main():
    source = "variants/contact_v5_premium.html"
    destination = "variants/contact_v2_stitch.html"
    
    # Overwrite the main contact file with the premium one
    shutil.copyfile(source, destination)
    
    print("Successfully replaced the main contact page with the premium design!")

apply_premium_as_main()
